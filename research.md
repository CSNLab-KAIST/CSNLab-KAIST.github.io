---
title: Research
permalink: /research/
---
<head>
    <link rel="stylesheet" href="{{ 'css/research.css' | relative_url }}">
</head>

<div id="Computer-Architecture" style="padding-top: 60px;"></div>

## Computer Architecture


**Description:** High-radix topologies in large-scale networks provide low network diameter and high path diversity, but the idle power from high-speed links results in energy inefficiency, especially at low traffic load. In this work, we exploit the high path diversity and non-minimal adaptive routing in high-radix topologies to consolidate traffic to a smaller number of links to enable more network channels to be power-gated. In particular, we propose TCEP (Traffic Consolidation for Energy-Proportional high-radix networks), a distributed, proactive power management mechanism for large-scale networks that achieves energy-proportionality by proactively power-gating network channels through traffic consolidation.

**Keywords:** 
- KW1

**Point Person:** A

**Related papers:**

---
<div id="Interconnection-Networks" style="padding-top: 60px;"></div>

## Interconnection Networks


**Abstract:** Data parallelism is commonly used to accelerate training for Convolutional Neural Networks (CNN) where input batch is distributed across the multiple workers; however, the communication time of weight gradients can limit scalability for moderate batch size. In this work, we propose multi-dimensional parallel training (MPT) of convolution layers by exploiting both data parallelism and intra-tile parallelism available in Winograd transformed convolution. Workers are organized across two dimensions – one dimension exploiting intra-tile parallelism while the other dimension exploits data parallelism. MPT reduces the amount of communication necessary for weight gradients since weight gradients are only communicated within the data parallelism dimension.

**Keywords:** 
- KW1

**Point Person:** B

**Related papers:**

--
<div id="Hardware-Security" style="padding-top: 60px;"></div>

## Hardware Security


**Abstract:** NUMA (non-uniform memory access) servers are commonly used in high-performance computing and datacenters. Within each server, a processor-interconnect (e.g.,Intel QPI, AMD HyperTransport) is used to communicate between the different sockets or nodes. In this work,we explore the impact of the processor-interconnect on overall performance – in particular, the performance unfairness caused by processor-interconnect arbitration. It is well known that locally-fair arbitration does not guarantee globally-fair bandwidth sharing as closer nodes receive more bandwidth in a multi-hop network. However, this work demonstrates that the opposite can occur in a commodity NUMA server where remote nodes receive higher bandwidth(and perform better). We analyze this problem and identify that this occurs because of external concentration used in router micro-architectures for processor-interconnect swithout globally-aware arbitration.

**Keywords:** 
- KW1

**Point Person:** C

**Related papers:**

